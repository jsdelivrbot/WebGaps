﻿
import impJQueryUI = require("./JQueryUI");
import impAny = require("../page/anyjq");
import impOn = require("../common/on");
import impJqte = require("../Jqte/JqteJQ");

export module ControlCommon {

    export class Code {

        public static Execute() {

            impOn.On.Code.Execute();
            new impJqte.JQte.JQteJQ().Init();

            impJQueryUI.JQueryUI.CommonCode.ResizableColumn();
           
            impJQueryUI.JQueryUI.CommonCode.Resizable(".empty-container");
            impJQueryUI.JQueryUI.CommonCode.Resizable(".empty-container-image");
            impJQueryUI.JQueryUI.CommonCode.Resizable(".empty-container-text");
            impJQueryUI.JQueryUI.CommonCode.ResizableRootElements(".root-elements", "s");
           
            impJQueryUI.JQueryUI.CommonCode.Draggable(".empty-container-menu", "");
            impJQueryUI.JQueryUI.CommonCode.Draggable(".empty-container-text", "");
            impJQueryUI.JQueryUI.CommonCode.Draggable(".empty-container-image", "");
            impJQueryUI.JQueryUI.CommonCode.Draggable(".empty-container-spacer", "");
            //impJQueryUI.JQueryUI.CommonCode.Draggable(".jq-plus-container", "");
                 
            impJQueryUI.JQueryUI.CommonCode.Droppable(".column");
           
            impJQueryUI.JQueryUI.CommonCode.Droppable(".empty-container");

            jQuery(".ui-resizable-e").html("<div class='jq-square jq-square-e'></div>");
            jQuery(".ui-resizable-se").html("<div class='jq-square jq-square-se'></div>");
            jQuery(".ui-resizable-s").html("<div class='jq-square jq-square-s'></div>");

        }

        public static DestroyResizable() {
  
            impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".empty-container-text");
            impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".column");
            impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".empty-container");
            impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".empty-container-image");
            impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".root-elements");
           
           
        }

    }

}