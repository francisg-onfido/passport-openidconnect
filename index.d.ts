/** Declaration file generated by dts-gen */

export = passport_openidconnect;

declare class passport_openidconnect {
    constructor(options: any, verify: any);

    authenticate(req: any, options: any): any;

    authorizationParams(options: any): any;

    configure(identifier: any, done: any): void;

    static Strategy: any;

}

