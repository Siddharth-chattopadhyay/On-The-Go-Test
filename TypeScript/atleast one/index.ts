// A utility type to extract the keys of optional properties from an object type
type OptionalKeysOf<Obj> = {
  [Key in keyof Obj as Omit<Obj, Key> extends Obj ? Key : never]: Obj[Key];
};

interface User {
  name: string;
  age?: number;
  role?: "admin" | "user";
}

// Result: type OptionalProps = "age" | "role"
type OptionalProps = keyof OptionalKeysOf<User>;


let r;

r = {"hello": "world"}