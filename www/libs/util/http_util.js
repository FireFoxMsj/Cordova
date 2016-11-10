var HttpUtil = function (base_url) {
    self.base_url = base_url
    self.headers = { }
    self.contentType = "application/json; charset=utf-8";
    self.dataType = "json";
};

HttpUtil.prototype.execute = function(path, method, params, succ) {
    return $$.ajax({
        url: self.base_url + "" + path,
        type: method,
        data: params,
        headers: self.headers,
        dataType: self.dataType,
        success: succ
    });
};

HttpUtil.prototype.add_header = function(name, value){
    self.headers[name] = value;
}