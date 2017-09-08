uy.Map = function(options) {
    this._options = options;

    if (this._options.MapOptions) {
        this._MapOptions = this._options.MapOptions;
    } else {
        uy.vm.$message({message:"请设置地图初始化参数对象",type:"error",showClose:true,duration:0});
        return false;
    }

}

uy.Map.prototype = {

};