import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Enhanced Intersection Observer hook
 * @param {Object} options - IntersectionObserver options
 * @param {boolean} options.freezeOnceVisible - Stop observing after first visibility
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Root margin
 */
export function useIntersectionObserver({
    threshold = 0.1,
    rootMargin = '0px',
    freezeOnceVisible = true
} = {}) {
    const [entry, setEntry] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
    const frozen = useRef(false);

    const updateEntry = useCallback(([entry]) => {
        setEntry(entry);

        if (entry.isIntersecting) {
            setIsVisible(true);
            if (freezeOnceVisible) {
                frozen.current = true;
            }
        } else if (!freezeOnceVisible) {
            setIsVisible(false);
        }
    }, [freezeOnceVisible]);

    useEffect(() => {
        const element = elementRef.current;

        if (!element || frozen.current) return;

        const observer = new IntersectionObserver(updateEntry, {
            threshold,
            rootMargin,
            root: null
        });

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin, updateEntry]);

    return { ref: elementRef, entry, isVisible };
}

export default useIntersectionObserver;
