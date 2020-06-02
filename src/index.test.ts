// @ts-nocheck
import { a } from ".";
import mZipObjectDeep from "lodash/zipObjectDeep";
import { zipObjectDeep as rZipObjectDeep } from "lodash";


describe('Test Suite', () => {

    it('should equal to 1', () => {
        expect(a).toBe("a");
    });

    it('should not have prototype pollution', () => {

        const testValue = 42;

        const notExistKey = "not_exist_key";

        mZipObjectDeep([`__proto__.${notExistKey}`], [testValue]); // try to prototype pollution by un-packaged module 

        expect(global[notExistKey]).toBeUndefined();

        rZipObjectDeep([`__proto__.${notExistKey}`], [testValue]); // try to prototype pollution by package lodash.js

        expect(global[notExistKey]).toBeUndefined();

    });

});