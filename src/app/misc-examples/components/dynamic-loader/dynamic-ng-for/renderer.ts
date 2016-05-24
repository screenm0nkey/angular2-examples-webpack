import { Input } from '@angular/core';

export abstract class Renderer {
    @Input() input: string;
}