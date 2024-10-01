export const params = {
    //to hold the data
    data: null,

    container: null,
    renderer: null,
    scene: null,

    //for frustum      
    zmax: 5.e10,
    zmin: 1,
    fov: 45,

    //for gui
    gui: null,

    //for the material of the points
    size: 2,
    alphaTest: 0.1,
    sizeAttenuation: true,

    //define some colors (https://github.com/d3/d3-scale-chromatic)
    colorMap: d3.interpolateViridis,
    colorMapMin: 0,
    colorMapMax: 5000,

	};
