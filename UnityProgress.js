function UnityProgress(gameInstance, progress) {
    if (!gameInstance.Module)
      return;
    var r = UnityLoader.Progress.Styles[gameInstance.Module.splashScreenStyle],
        n = gameInstance.Module.progressLogoUrl ? gameInstance.Module.resolveBuildUrl(gameInstance.Module.progressLogoUrl) : r.progressLogoUrl,
        o = gameInstance.Module.progressEmptyUrl ? gameInstance.Module.resolveBuildUrl(gameInstance.Module.progressEmptyUrl) : r.progressEmptyUrl,
        i = gameInstance.Module.progressFullUrl ? gameInstance.Module.resolveBuildUrl(gameInstance.Module.progressFullUrl) : r.progressFullUrl,
        a = "position: absolute; left: 50%; top: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%);";
    if (!gameInstance.logo) {
       gameInstance.logo = document.createElement("div");
       gameInstance.logo.style.cssText = a + "background: url('" + n + "') no-repeat center / contain; width: 154px; height: 130px;";
       gameInstance.container.appendChild(gameInstance.logo);
    }
    if (!gameInstance.progress) {
       gameInstance.progress = document.createElement("div");
       gameInstance.progress.style.cssText = a + " height: 18px; width: 141px; margin-top: 90px;";
       gameInstance.progress.empty = document.createElement("div");
       gameInstance.progress.empty.style.cssText = "background: url('" + o + "') no-repeat right / cover; float: right; width: 100%; height: 100%; display: inline-block;";
       gameInstance.progress.appendChild(gameInstance.progress.empty);
       gameInstance.progress.full = document.createElement("div");
       gameInstance.progress.full.style.cssText = "background: url('" + i + "') no-repeat left / cover; float: left; width: 0%; height: 100%; display: inline-block;";
       gameInstance.progress.appendChild(gameInstance.progress.full);
       gameInstance.container.appendChild(gameInstance.progress);
     }
    gameInstance.progress.full.style.width = 100 * progress + "%";
    gameInstance.progress.empty.style.width = 100 * (1 - progress) + "%";
    if (progress == 1) {
       gameInstance.logo.style.display = gameInstance.progress.style.display = "none";
    }
  }    
