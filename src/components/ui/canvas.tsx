/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/no-explicit-any */

function Oscillator(this: any, e: any) { this.init(e || {}); }
Oscillator.prototype = {
    init(this: any, e: any) {
        this.phase = e.phase || 0;
        this.offset = e.offset || 0;
        this.frequency = e.frequency || 0.001;
        this.amplitude = e.amplitude || 1;
    },
    update(this: any) {
        this.phase += this.frequency;
        eVal = this.offset + Math.sin(this.phase) * this.amplitude;
        return eVal;
    },
    value(this: any) { return eVal; },
};

function Line(this: any, e: any) { this.init(e || {}); }
Line.prototype = {
    init(this: any, e: any) {
        this.spring = e.spring + 0.1 * Math.random() - 0.05;
        this.friction = E.friction + 0.01 * Math.random() - 0.005;
        this.nodes = [];
        for (let i = 0; i < E.size; i++) {
            const t = new (SpringNode as any)();
            t.x = pos.x; t.y = pos.y;
            this.nodes.push(t);
        }
    },
    update(this: any) {
        let e = this.spring, t = this.nodes[0];
        t.vx += (pos.x - t.x) * e; t.vy += (pos.y - t.y) * e;
        for (let n: any, i = 0, a = this.nodes.length; i < a; i++) {
            t = this.nodes[i];
            if (i > 0) {
                n = this.nodes[i - 1];
                t.vx += (n.x - t.x) * e; t.vy += (n.y - t.y) * e;
                t.vx += n.vx * E.dampening; t.vy += n.vy * E.dampening;
            }
            t.vx *= this.friction; t.vy *= this.friction;
            t.x += t.vx; t.y += t.vy; e *= E.tension;
        }
    },
    draw(this: any) {
        let ea: any, t: any;
        let nx = this.nodes[0].x, ny = this.nodes[0].y;
        ctx.beginPath(); ctx.moveTo(nx, ny);
        for (let a = 1, o = this.nodes.length - 2; a < o; a++) {
            ea = this.nodes[a]; t = this.nodes[a + 1];
            nx = 0.5 * (ea.x + t.x); ny = 0.5 * (ea.y + t.y);
            ctx.quadraticCurveTo(ea.x, ea.y, nx, ny);
        }
        ea = this.nodes[this.nodes.length - 2];
        t = this.nodes[this.nodes.length - 1];
        ctx.quadraticCurveTo(ea.x, ea.y, t.x, t.y);
        ctx.stroke(); ctx.closePath();
    },
};

function onMousemove(e: any) {
    function o() {
        lines.length = 0;
        for (let i = 0; i < E.trails; i++)
            lines.push(new (Line as any)({ spring: 0.45 + (i / E.trails) * 0.025 }));
    }
    function c(ev: any) {
        if (ev.touches) { pos.x = ev.touches[0].pageX; pos.y = ev.touches[0].pageY; }
        else { pos.x = ev.clientX; pos.y = ev.clientY; }
        ev.preventDefault?.();
    }
    function l(ev: any) {
        if (ev.touches.length === 1) { pos.x = ev.touches[0].pageX; pos.y = ev.touches[0].pageY; }
    }
    document.removeEventListener("mousemove", onMousemove);
    document.removeEventListener("touchstart", onMousemove);
    document.addEventListener("mousemove", c, { passive: false });
    document.addEventListener("touchmove", c, { passive: false });
    document.addEventListener("touchstart", l);
    c(e); o(); render();
}

function render() {
    if (!ctx?.running) return;
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = `hsla(${Math.round(f.update())},100%,60%,0.022)`;
    ctx.lineWidth = 10;
    for (let i = 0; i < E.trails; i++) { lines[i].update(); lines[i].draw(); }
    ctx.frame++;
    window.requestAnimationFrame(render);
}

function resizeCanvas() {
    if (!ctx?.canvas) return;
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

let ctx: any, f: any, eVal = 0;
const pos: any = {};
const lines: any[] = [];
const E = { debug: true, friction: 0.5, trails: 60, size: 50, dampening: 0.025, tension: 0.99 };

function SpringNode(this: any) { this.x = 0; this.y = 0; this.vy = 0; this.vx = 0; }

export const renderCanvas = function () {
    const canvas = document.getElementById("nous-canvas") as HTMLCanvasElement;
    if (!canvas) return;
    ctx = canvas.getContext("2d");
    ctx.running = true;
    ctx.frame = 1;
    f = new (Oscillator as any)({
        phase: Math.random() * 2 * Math.PI,
        amplitude: 85,
        frequency: 0.0015,
        offset: 285,
    });
    document.addEventListener("mousemove", onMousemove);
    document.addEventListener("touchstart", onMousemove);
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("focus", () => { if (!ctx.running) { ctx.running = true; render(); } });
    window.addEventListener("blur", () => { ctx.running = true; });
    resizeCanvas();
};

export const destroyCanvas = function () {
    if (ctx) ctx.running = false;
};
