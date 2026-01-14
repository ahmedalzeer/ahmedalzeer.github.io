<template>
    <div class="glass-bg">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
    </div>
</template>

<style scoped>
.glass-bg {
    position: fixed;
    inset: 0;
    z-index: -1;
    background: #0f172a;
    overflow: hidden;
}

.blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    animation: move 20s infinite alternate;
    opacity: 0.6;
}

.blob-1 {
    width: 400px;
    height: 400px;
    background: #6366f1;
    top: -10%;
    left: -10%;
}

.blob-2 {
    width: 500px;
    height: 500px;
    background: #a855f7;
    bottom: -10%;
    right: -10%;
    animation-delay: -5s;
}

.blob-3 {
    width: 300px;
    height: 300px;
    background: #ec4899;
    top: 40%;
    left: 30%;
    animation-delay: -10s;
}

@keyframes move {
    from {
        transform: translate(0, 0) scale(1);
    }

    to {
        transform: translate(100px, 50px) scale(1.2);
    }
}
</style>