export declare type StackConnectionConfig = {
    apiKey: string;
    token: string;
    region: string;
    environment: string;
};
export declare function stackConnect(client: any, config: StackConnectionConfig): Promise<{
    stack: any;
    types: any;
}>;
