import { defineConfig } from 'vite';

export default defineConfig({
    base: '/controle-jornada/painel/', // Define o caminho base do projeto
    build: {
        outDir: 'painel', // Gera os arquivos dentro da pasta 'dist'
    }
});
