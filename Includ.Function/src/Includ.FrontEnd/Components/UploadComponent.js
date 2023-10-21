export class UploadComponent {

    constructor() {
      this.dado = null; //blobURL
    }
  
    async converterDadoParaBlobURL(file) {
      if (!(file instanceof File)) {
        throw new Error('A entrada deve ser um objeto de arquivo (File).');
      }
  
      // Lê o conteúdo do arquivo como uma string base64
      const base64Texto = await this.readFileAsBase64(file);
  
      // Converte a string base64 em um Blob
      const blob = this.base64StringToBlob(base64Texto);
  
      // Revoga a Blob URL anterior, se existir
      if (this.dado) {
        URL.revokeObjectURL(this.dado);
      }
  
      // Cria uma Blob URL a partir do Blob
      this.dado = URL.createObjectURL(blob);
  
      return this.dado;
    }
  
    async readFileAsBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }
  
    base64StringToBlob(base64String) {
      const byteCharacters = atob(base64String);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      return new Blob([byteArray]);
    }
  
    releaseBlobURL() {
      // Revoca a Blob URL se existir
      if (this.dado) {
        URL.revokeObjectURL(this.dado);
        this.dado = null;
      }
    }
}
  


  
