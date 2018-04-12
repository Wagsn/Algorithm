// WGraph.js

// vertex for graph
class WS_Vertex {
    constructor() {
        //
        this.weight = 0;
        this.data = null;
    }
}
function WS_Ege(){
    //
    this.weight =0;

}
// Graph abstract data type
class WS_Graph {
    constructor() {
        //
        this.datas =new Array()
        this.vertexs = [];
        this.eges = [];
        this.add = function addVertex(vertex) {
            this.datas.
            if (this.vertexs.indexOf(vertex) == -1) {
                this.vertexs.push(vertex);
            }
        };
    }
}

