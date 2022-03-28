export enum ActivityRobot {
    foo = "foo",
    bar = "bar",
    foobar = "foobar"
}
export interface IRobot {
    name: string;
    activity: ActivityRobot;
    id?: number;
}