import { useEffect, useRef, useCallback } from 'react';
import { useMediaQuery, breakpoints } from './useMediaQuery';

/**
 * Enhanced scroll animation hook with accessibility support
 * @param {Object} options - Animation options
 * @param {string} options.rootMargin - Intersection observer margin
 * @param {number} options.threshold - Visibility threshold
 * @param {boolean} options.staggerChildren - Enable staggered animations
 * @param {number} options.staggerDelay - Delay between staggered items (ms)
 */
export function useScrollAnimation({
    rootMargin = '0px 0px -50px 0px',
    threshold = 0.1,
    staggerChildren = false,
    staggerDelay = 100
} = {}) {
    const ref = useRef(null);
    const prefersReducedMotion = useMediaQuery(breakpoints.reducedMotion);

    const handleIntersection = useCallback((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const element = entry.target;

                // Respect reduced motion preference
                if (prefersReducedMotion) {
                    element.classList.add('animate', 'no-animation');
                } else {
                    const delay = element.dataset.delay || 0;
                    setTimeout(() => {
                        element.classList.add('animate');
                    }, parseInt(delay));
                }

                observer.unobserve(element);
            }
        });
    }, [prefersReducedMotion]);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin,
            threshold
        });

        // Get all animated elements
        const animatedElements = element.querySelectorAll('[data-animate]');

        // Apply stagger delays if enabled
        if (staggerChildren) {
            animatedElements.forEach((el, index) => {
                if (!el.dataset.delay) {
                    el.dataset.delay = index * staggerDelay;
                }
            });
        }

        animatedElements.forEach((el) => observer.observe(el));

        return () => {
            animatedElements.forEach((el) => observer.unobserve(el));
        };
    }, [handleIntersection, rootMargin, threshold, staggerChildren, staggerDelay]);

    return ref;
}

export default useScrollAnimation;
