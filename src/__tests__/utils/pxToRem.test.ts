import { pxToRem } from "@/utils";

describe('pxToRem', () => {
    it('should correctly convert pixels to rem for positive values', () => {
        expect(pxToRem(16)).toBe('1rem')
        expect(pxToRem(32)).toBe('2rem')
        expect(pxToRem(8)).toBe('0.5rem')
    })

    it('should correctly convert to rem zero', () => {
        expect(pxToRem(0)).toBe('0rem')
    })

    it('should correctly convert pixels to rem for negative values', () => {
        expect(pxToRem(-16)).toBe('-1rem')
        expect(pxToRem(-32)).toBe('-2rem')
        expect(pxToRem(-8)).toBe('-0.5rem')
    })
})