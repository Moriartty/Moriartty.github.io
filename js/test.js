//让图片能填充且居中在指定高度的容器中
function centerThumb(img){
    var $img=$(img);
    //获取容器的高度和宽度
    var $parent=$('#carousel');
    var width=$parent.width();
    var height=$parent.height();
    //容器的宽高比
    var delta0=width/height;
    //图片的宽高比
    var delta=img.width/img.height;
    //若容器的宽高比大于图片的，说明容器更“扁”
    if(delta0>delta){
        $img.css({height:'100%', width:'auto', maxWidth:'none', marginLeft:Math.abs(width-height*delta)/2});
    }else{
        $img.css({width:'100%', height:'auto', maxHeight:'none', marginTop:Math.abs(height-width/delta)/2});
    }
}