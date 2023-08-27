basic.forever(function () {
    ModuleWorld_PWM.RGB(Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR), Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG), Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB))
    basic.pause(100)
})
