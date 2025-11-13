interface Vector3 {
    x: number;
    y: number;
    z: number;
};

// A standard utility type implementation
type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

class K{
    maxToRange<T extends keyof Vector3>(a: WithRequired<Partial<Vector3>, T>, b: typeof a) {
    a.x
    // Helper function to safely get the max component of a single vector object
    const getMaxComponent = (vector: Partial<Vector3>): number => {
        // Collect all available values, defaulting missing ones to 0 for the comparison
        const values = [
            vector.x ?? 0,
            vector.y ?? 0,
            vector.z ?? 0
        ];
        return Math.max(...values);
    };

    const A = getMaxComponent(a);
    const B = getMaxComponent(b);
    
    // The calculation in the original code seems to average the two maximums
    return (A + B) / 2;
}
};


// Example Usage:
// 'x' is required for these specific arguments by the generic constraint T
const vecA = { x: 10, y: 5 };
const vecB = { x: 2, z: 20 };

// Call the function, explicitly passing 'x' as the required key
const result = maxToRange<'x'>(vecA, vecB); 

console.log(result); // A = 10, B = 20. Result = 15
