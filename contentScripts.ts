(() => {
  function addObserver(callback: MutationCallback) {
    const config = { attributes: true, childList: true, subtree: true };
    const observer = new MutationObserver(callback);
    const target: HTMLElement | null = document.body;

    if (target) {
      observer.observe(target, config);
      console.debug(
        `Observer added to document with doctype ${target.className}`
      );
    } else {
      console.error('Element with ID "composer-background" not found.');
    }
  };

  function observerCallback(mutations: MutationRecord[]): void {
      if (window.location.href.startsWith("ENTER_YOUR_LINK")) {
        
        //script goes here
        INSERT_MANIPULATING_FUNCTION;

        console.debug(`UI Update Event fired.`);
      };
  };

  function INSERT_MANIPULATING_FUNCTION() {
    
  };
  
  addObserver(observerCallback);
  INSERT_MANIPULATING_FUNCTION();
})();
