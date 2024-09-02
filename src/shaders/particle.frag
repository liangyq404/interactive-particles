// @author brunoimbrizi / http://brunoimbrizi.com

precision highp float;

uniform sampler2D uTexture;

varying vec2 vPUv;
varying vec2 vUv;

void main(){
	vec4 color=vec4(.2,.2,.2,0.);
	vec2 uv=vUv;
	vec2 puv=vPUv;
	
	// pixel color
	vec4 colA=texture2D(uTexture,puv);
	
	// greyscale
	float grey=colA.r*.21+colA.g*.71+colA.b*.07;
	vec4 colB=vec4(grey,grey,grey,1.);
	
	// circle
	float border=.3;
	float radius=.5;
	float dist=radius-distance(uv,vec2(.5));
	float t=smoothstep(0.,border,dist);
	
	// final color
	
	color=colB;
	// color.a=t;
	
	
	color=vec4(.9,.9,.9,t);
	
	
	gl_FragColor=color;
}