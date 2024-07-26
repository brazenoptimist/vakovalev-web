// vite.config.ts
import svgr from "file:///Users/valentin/WebstormProjects/vakovalev-web/node_modules/@svgr/rollup/dist/index.js";
import react from "file:///Users/valentin/WebstormProjects/vakovalev-web/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { resolve as resolvePath } from "path";
import { defineConfig } from "file:///Users/valentin/WebstormProjects/vakovalev-web/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "/Users/valentin/WebstormProjects/vakovalev-web";
var vite_config_default = defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: "0.0.0.0",
    port: 8080
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolvePath(__vite_injected_original_dirname, "index.html"),
        wallpaper: resolvePath(__vite_injected_original_dirname, "wallpaper/index.html"),
        error404: resolvePath(__vite_injected_original_dirname, "404.html")
      },
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString();
          }
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvdmFsZW50aW4vV2Vic3Rvcm1Qcm9qZWN0cy92YWtvdmFsZXYtd2ViXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvdmFsZW50aW4vV2Vic3Rvcm1Qcm9qZWN0cy92YWtvdmFsZXYtd2ViL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy92YWxlbnRpbi9XZWJzdG9ybVByb2plY3RzL3Zha292YWxldi13ZWIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgc3ZnciBmcm9tICdAc3Znci9yb2xsdXAnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJ1xuaW1wb3J0IHsgcmVzb2x2ZSBhcyByZXNvbHZlUGF0aCB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRwbHVnaW5zOiBbcmVhY3QoKSwgc3ZncigpXSxcblx0c2VydmVyOiB7XG5cdFx0aG9zdDogJzAuMC4wLjAnLFxuXHRcdHBvcnQ6IDgwODAsXG5cdH0sXG5cdGJ1aWxkOiB7XG5cdFx0c291cmNlbWFwOiB0cnVlLFxuXHRcdHJvbGx1cE9wdGlvbnM6IHtcblx0XHRcdGlucHV0OiB7XG5cdFx0XHRcdG1haW46IHJlc29sdmVQYXRoKF9fZGlybmFtZSwgJ2luZGV4Lmh0bWwnKSxcblx0XHRcdFx0d2FsbHBhcGVyOiByZXNvbHZlUGF0aChfX2Rpcm5hbWUsICd3YWxscGFwZXIvaW5kZXguaHRtbCcpLFxuXHRcdFx0XHRlcnJvcjQwNDogcmVzb2x2ZVBhdGgoX19kaXJuYW1lLCAnNDA0Lmh0bWwnKSxcblx0XHRcdH0sXG5cdFx0XHRvdXRwdXQ6IHtcblx0XHRcdFx0bWFudWFsQ2h1bmtzKGlkKSB7XG5cdFx0XHRcdFx0aWYgKGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMnKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGlkXG5cdFx0XHRcdFx0XHRcdC50b1N0cmluZygpXG5cdFx0XHRcdFx0XHRcdC5zcGxpdCgnbm9kZV9tb2R1bGVzLycpWzFdXG5cdFx0XHRcdFx0XHRcdC5zcGxpdCgnLycpWzBdXG5cdFx0XHRcdFx0XHRcdC50b1N0cmluZygpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFQsT0FBTyxVQUFVO0FBQzdVLE9BQU8sV0FBVztBQUNsQixTQUFTLFdBQVcsbUJBQW1CO0FBQ3ZDLFNBQVMsb0JBQW9CO0FBSDdCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQUEsRUFDekIsUUFBUTtBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1A7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNOLFdBQVc7QUFBQSxJQUNYLGVBQWU7QUFBQSxNQUNkLE9BQU87QUFBQSxRQUNOLE1BQU0sWUFBWSxrQ0FBVyxZQUFZO0FBQUEsUUFDekMsV0FBVyxZQUFZLGtDQUFXLHNCQUFzQjtBQUFBLFFBQ3hELFVBQVUsWUFBWSxrQ0FBVyxVQUFVO0FBQUEsTUFDNUM7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNQLGFBQWEsSUFBSTtBQUNoQixjQUFJLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFDaEMsbUJBQU8sR0FDTCxTQUFTLEVBQ1QsTUFBTSxlQUFlLEVBQUUsQ0FBQyxFQUN4QixNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQ1osU0FBUztBQUFBLFVBQ1o7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
