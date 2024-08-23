function(instance, context) {
    
    const container = instance.canvas.next('div');
   

    if (container.get()[0]){    
    	const masonry = new MiniMasonry({ container: container.get()[0] });
                  
    } 
}