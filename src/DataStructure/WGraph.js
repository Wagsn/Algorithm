// WGraph.js

// vertex for graph
class WS_Vertex {
    constructor() {
        //
        this.weight = 0;
        this.data = null;
    }
}
class WS_Ege {
    constructor() {
        //
        this.weight = 0;
    }
}
// Graph abstract data type
class WS_Graph {
    constructor() {
        //
        this.vertexs = [];
        this.eges = [];
        this.add = function addVertex(vertex) {
            if (this.vertexs.indexOf(vertex) == -1) {
                this.vertexs.push(vertex);
            }
        };
    }
}

