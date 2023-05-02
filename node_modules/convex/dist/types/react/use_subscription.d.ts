/**
 * Hook used for safely managing subscriptions in concurrent mode.
 *
 * In order to avoid removing and re-adding subscriptions each time this hook is called,
 * the parameters passed to this hook should be memoized in some way–
 * either by wrapping the entire params object with useMemo()
 * or by wrapping the individual callbacks with useCallback().
 *
 * @internal
 */
export declare function useSubscription<Value>({ getCurrentValue, subscribe, }: {
    getCurrentValue: () => Value;
    subscribe: (callback: () => void) => () => void;
}): Value;
//# sourceMappingURL=use_subscription.d.ts.map