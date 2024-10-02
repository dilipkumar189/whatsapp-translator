function translateExistingChats() {
    const messages = document.querySelectorAll('.message-in, .message-out');
    
    messages.forEach(async (message) => {
      const originalText = message.textContent;
      const translatedText = await translateText(originalText, 'en');
      
      const translationElement = document.createElement('div');
      translationElement.classList.add('translation');
      translationElement.textContent = translatedText;
      
      message.appendChild(translationElement);
    });
  }
  
  function setupInputTranslation() {
    const inputField = document.querySelector('div[contenteditable="true"]');
    const sendButton = document.querySelector('button[aria-label="Send"]');
    
    inputField.addEventListener('input', async function() {
      const originalText = this.textContent;
      const translatedText = await translateText(originalText, 'es');
      this.dataset.translation = translatedText;
    });
    
    sendButton.addEventListener('click', function() {
      const inputField = document.querySelector('div[contenteditable="true"]');
      const translatedText = inputField.dataset.translation;
      console.log('Sending translated message:', translatedText);
    });
  }
  
  async function translateText(text, targetLang) {
    // Placeholder function - replace with actual API call
    console.log(`Translating: ${text} to ${targetLang}`);
    return `Translated: ${text}`;
  }
  
  window.addEventListener('load', () => {
    translateExistingChats();
    setupInputTranslation();
  });