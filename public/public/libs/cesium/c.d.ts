declare module 'cesium' {
    export class Sampler {
        constructor(options?: any);
    };

    export class Texture {
        constructor(options: any);
        destroy();
    }
    export function destroyObject();
    export var Check;
    export var ContextLimits;

    export class VertexArray {
        constructor(options: any);
        public static fromGeometry(options: any);

        destroy();
    }

    export enum BufferUsage {
        STATIC_DRAW
    }

    export class RenderState {
        public static fromCache(options: any);
    }

    export class ShaderSource {
        constructor(options: any);
    }

    export class ShaderProgram {
        public static fromCache(options: any);
    }

    export class DrawCommand {
        constructor(options: any);
        public vertexArray: VertexArray;
    }

    export class ComputeCommand {
        constructor(options: any);
        public outputTexture: Texture;
    }

    export enum Pass {
        TRANSLUCENT, OPAQUE
    }

    export class ClearCommand {
        constructor(options: any);
    }

    export class Framebuffer {
        constructor(options: any);
        _gl: WebGL2RenderingContext | WebGLRenderingContext;
        _colorTextures: Texture[];
        _bind();
        _unBind();
    }

    export var Buffer;
}