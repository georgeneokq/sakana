declare module 'sakana' {
    export type SakanaCharacter = 'takina' | 'chisato'

    export interface SakanaValue {
        r: number
        y: number
        t: number
        w: number
        d: number
    }

    export interface SakanaInstance {
        setCharacter(character: SakanaCharacter): void
        switchCharacter(): void
        setOriginRotate(rotate: number): void
        confirmRunning(): void
        pause(): void
        play(): void
        getValue(): SakanaValue
        getRunning(): boolean
    }

    export interface SakanaOptions {
        el: string,
        character?: SakanaCharacter
        inertia?: number
        originRotate?: number
        decay?: number
        r?: number
        y?: number
        scale?: string | number
        translateY?: number
        strokeStyle?: string
        canSwitchCharacter?: boolean
        onSwitchCharacter?(character: SakanaCharacter): void
    }

    export function init(options: SakanaOptions): SakanaInstance
    export function setMute(mute: boolean): void
}
