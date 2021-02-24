export function mockResponse() {
    const res = {
        statusValue: null,
        status: function (value) {
            this.statusValue = value;
            return this;
        },
        json: function(value) {
            this.jsonValue = value;
            return this;
        }
    }
    
    return res;
}