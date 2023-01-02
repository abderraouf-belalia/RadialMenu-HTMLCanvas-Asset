import Draw from "../utils/draw.js"

export default class Scene {
    
    public static context: CanvasRenderingContext2D

    public static bind(context: CanvasRenderingContext2D){
        Scene.context = context    
    }

    private static clear(){
        Scene.context
            .clearRect(0, 0, Scene.context.canvas.width, Scene.context.canvas.height)
    }
    
    public static render(){

        Scene.clear()
        const context = Scene.context

        const canvas_center_x = context.canvas.width/2
        const canvas_center_y = context.canvas.height/2
    
        
        /*Draw.drawRadialMenuButton(
            context,
            [canvas_center_x, canvas_center_y],
            1,
            3,
            1
        )*/
    
        function render_scene(){
            context.clearRect(0, 0, context.canvas.width, context.canvas.height)
            context.save()
            context.translate(
                canvas_center_x,
                canvas_center_y
            )
            
    
            context.beginPath()
            context.moveTo(0,0)
            context.lineTo(100,0)
            context.stroke()  
            context.restore()
    
        }
        
        //render_scene()
    }
}