
(function(window){
    $clip = $Clip = window.$Clip = {};
    //默认配置
    $Clip._Config={
        "canvasId":'DC_canvas_clip_'+new Date().getTime(),
        "clipboxId":'DC_clipbox_'+new Date().getTime(),
        "width":125,
        "height":125,
        "borderColor":"#999999",//边框颜色
        "bgOpcity":0.5,//背景透明度
        "btn":{
            "ok":{
                "btnTitle":"确定",
                "callback":function(){}
            },
            "canel":{
                "btnTitle":"取消",
                "callback":function(){}
            }
        }
    };
    $Clip.Main=function(_Config){
        $Clip._Config.width = _Config.width||$Clip._Config.width;
        $Clip._Config.height = _Config.height||$Clip._Config.height;
        $Clip._Config.borderColor = _Config.borderColor||$Clip._Config.borderColor;
        $Clip._Config.bgOpcity = _Config.bgOpcity||$Clip._Config.bgOpcity;
    };
    $Clip.Main.prototype={
        "init":function(){
            this._Config.btn

        },
        "addEvent":function(){
            this.height = $(window).height();
            this.width = $(window).width();
            //创建图像
            this.draw = new $Clip.EventTool({
                "touchStart":function(){
                    //callback
                },
                "touchEnd":function(){
                    //callback func
                },
                "touchMove":{
                    singlePoint:function(){
                        //callback
                    },
                    multiPointFunc:function(){
                        //callback
                    }
                }}
                                           );
        },
        "bulidHtml":function(){
           var clipHtml += "<div id=\""+this._Config.clipboxId+"\" class=\"Dc_clipbox_dialog\">";
            clipHtml += "	<div class=\"Dc_clipbox_Canvasbox\">";
            clipHtml += "		<canvas id=\"\"><\/canvas>";
            clipHtml += "	<\/div>";
            clipHtml += "	<div class=\"Dc_clipbox_btnbox\">";
            clipHtml += "		<button type=\"button\" class=\"Dc_clipbox_btn Dc_clipbox_btn_ok\">确认<\/button>";
            clipHtml += "		<button type=\"button\" class=\"Dc_clipbox_btn Dc_clipbox_btn_canel\">取消<\/button>";
            clipHtml += "	<\/div>";
            clipHtml += "<\/div>";
            return clipHtml;
        }
        ,
        "createClipbox":function(){
            $(".Dc_clipbox_dialog").
            //创建窗口
            return '';
        },
        "createBj":function(){
            //创建框子
            //创建黑背景
        },
        "createCanavs":function(){
            this.draw = new $Clip.DrawCanvas($Clip._Config);

        },
        "getImageData":function(callback){
            //获取截图后图像数据
            callback.call(this.btn,data);
        },
        "createFileInput":function(){
            //创建文件上传框

            //透明度为0

            //修改上传框的大家与按钮相同
        }


    };

    //总入口
    $Clip.setClipImage=function(){
        //init
        //加载事件
    };
})(window);

(function(){

    $Clip.DrawCanvas=function(drawConfig){
        this.drawConfig = drawConfig;
    };
    $Clip.DrawCanvas.prototype={
        "drawImage":function(imgpath,x,y,width,height){
            //绘制图片到画布
            var img =new Image();
            img.src=this.drawConfig.imgpath;
            this.ctx.drawImage(imgpath,x,y,width,height);
        },
        "createCanvas":function(){
            document.getElementById(this.drawConfig.canvasId);
            this.ctx=c.getContext("2d");
            return this;
        },
        "getImageData":function(x,y,width,height){
            //获取指定区域的图像
            return this.ctx.getImageData(x,y,width,height);
        }

    };
})();

(function(){
    /*configMap={
         elem:mycanvas,
         touchStart:function(){
          //callback
         },
         touchEnd:function(){
         //callback
         },
         touchMove:{
            singlePoint:function(){//callback},
            multiPointFunc:function(){//callback}
          }
        }*/
    $Clip.EventTool=function(configMap){
        this.configMap = configMap;
        this.elem = configMap.elem;
    };

    $Clip.EventTool.prototype={
        "touchMove":function(e){
            console.log(e);
        },
        "touchStart":function(e){
            this.configMap.touchStart();
        },
        "touchEnd":function(e){
            this.configMap.touchEnd();
        },
        "addEvents":function(){
            this.elem.addEventListener("touchStart",this.touchStart,false);
            this.elem.addEventListener("touchEnd",this.touchEnd,false);
            this.elem.addEventListener("touchMove",this.touchMove,false);
        }
    };
})();
