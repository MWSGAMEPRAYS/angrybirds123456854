class Log {
    //serve parta cirar os objetos em diferentes posições da tela;
      constructor(x, y, height, angle) {
        //var option, são opcções de fisíca;
        var options = {
            'restitution':0.8,
            'friction':1.3,
            'density':1.6
          }
        // serve para criar um objeto retangular ou quadrado na tela;
        this.body = Bodies.rectangle(x, y, 20, height, options);
        this.width = 20;
        this.height = height;
        Matter.Body.setAngle(this.body, angle);
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
        fill(255);
        stroke("green");
        strokeWeight(4);
        rect(0,0, this.width, this.height);
        //pop, reverte para a config anterior;
        pop();
     }
    };
    