class Pig {
    //serve parta cirar os objetos em diferentes posições da tela;
      constructor(x, y) {
        //var option, são opcções de fisíca;
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':0.7
          }
        // serve para criar um objeto retangular ou quadrado na tela;
        this.body = Bodies.rectangle(x, y, 50, 50,  options);
        this.width = 50;
        this.height = 50;
        //world.add serve, para add o bojeto Body dentro do "mundo da fisíca";
        World.add(world, this.body);
      }
      //exibir o objeto no jogo;
      display(){
        var pos =this.body.position;
        var angle =this.body.angle;
        //push, captura a nova config;
        push();
        // transalte é translação de um objeto;
        translate(pos.x, pos.y);
        //rotate é rotação de um objeto;
        rotate(angle);
        //rectMode, define o X e o Y;
        rectMode(CENTER);
        //Fill é o preenchimento.
        fill("green");
        rect(0,0, this.width, this.height);
        //pop, reverte para a config anterior;
        pop();
      }
    };
    