var colors="d496a7-9d695a-78e0dc-8eedf7-a1cdf1-dbf9f4-e6fdff-d9d7dd-b07bac-5f7367-564787-dbcbd8-f2fdff-9ad4d6-101935-c1aba6-533b4d-f564a9-faa4bd-fae3c6-bbdbb4-fcf0cc-4392f1-ece8ef-e3ebff-e7f0ff-dc493a".split("-").map(a=>"#"+a)
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	translate(width/2,height/2);
	rectMode(CENTER);
	background("#A1CDF1")
	noStroke()
	// strokeWeight(5)
	fill(colors[0])
	//head
	rect(0,-200,150,150,20);
	//eyes
	fill(colors[1])
	circle(-30,-200,25)
	circle(30,-200,25)
	fill(255)
	circle(-30,-200,15)
	circle(30,-200,15)
	//眉毛

	push()
			fill(colors[16])
		rotate(0.3+sin(frameCount/30)/10)
		rect(-30,-250,50,10);
	pop()
	push()
			fill(colors[17])
		rotate(-0.25+sin(frameCount/50)/10)
		rect(30,-250,50,10);
	pop()
	//mouth
	fill(colors[3])
	rect(0,-150,50,20)
	//ears
	fill(colors[4])
	rect(-85,-200,20,50)
	rect(85,-200,20,50)
	//neck
	fill(colors[5])
	rect(0,-120,20,10)
	fill(colors[6])
	rect(0,-110,20,10)
	//body
	fill(colors[7])
	rect(0,-30,150,150,20)
	//shoulder
	fill(colors[8])
	rect(-85,-80,20,10)
	rect(85,-80,20,10)
	fill(colors[9])
	circle(-100,-80,25)
	circle(100,-80,25)
	fill(colors[10])
	circle(-100,-80,15)
	circle(100,-80,15)
	fill(colors[11])
	rect(-100,-60,10,20)
	rect(100,-60,10,20)
	fill(colors[12])
	rect(-100,-15,20,80,5)
	rect(100,-15,20,80,5)
	fill(colors[13])
	rect(-100,30,10,10)
	rect(100,30,10,10)
	fill(colors[14])
	rect(-90,30,10,10)
	rect(-110,30,10,10)
	fill(colors[15])
	rect(-90,40,10,20)
	rect(-110,40,10,20)
	fill(colors[14])
	rect(90,30,10,10)
	rect(110,30,10,10)
	fill(colors[15])
	rect(90,40,10,20)
	rect(110,40,10,20)
	//leg
	
}