import { NgModule } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';

@NgModule()
export class NativeScriptMaterialCardViewModule {}

registerElement('MDSlider', () => require('../slider').Slider);
