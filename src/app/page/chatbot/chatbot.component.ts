import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  userInput: string = '';
  messages: { sender: string, text: string }[] = [
    { sender: 'bot', text: '¡Hola! ¿En qué puedo ayudarte hoy? 😊' }
  ];

  private despedidas = [
    '¡Adiós! Si necesitas más ayuda, estaré aquí. 👋',
    '¡Nos vemos pronto! No dudes en volver cuando quieras. 😄',
    '¡Cuídate! Si necesitas algo, aquí estaré. 😊',
    '¡Hasta luego! ¡Espero que tengas un gran día! 🌟',
    '¡Chau! No dudes en regresar cuando necesites ayuda. 😎'
  ];

  private saludos = [
    '¡Hola! ¿Cómo puedo ayudarte hoy? 😄',
    '¡Buenas! ¿En qué puedo ayudarte? 👋',
    '¡Hey! ¿Qué tal? ¿Cómo te puedo asistir hoy? 🤖',
    '¡Hola! ¡Es un gusto verte por aquí! 😊',
    '¡Hola! ¿En qué puedo ser útil? 😎'
  ];

  private respuestasGenerales = [
    'Lo siento, no te entiendo. Por favor, elige una opción o pregunta algo específico. 🤔',
    'No estoy seguro de lo que me estás pidiendo, ¿puedes intentar otra vez? 😕',
    '¿Podrías ser más específico con tu solicitud? 😅',
    'Lo siento, pero no puedo ayudarte con eso. ¿Te gustaría saber algo más sobre los temas disponibles? 🤖',
  ];

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push({ sender: 'user', text: this.userInput });

      const message = this.userInput.toLowerCase();

      if (message.includes('hola') || message.includes('buenos días') || message.includes('hey')) {
        const saludo = this.getRandomResponse(this.saludos);
        this.messages.push({ sender: 'bot', text: saludo });
        this.messages.push({ sender: 'bot', text: 'Aquí tienes algunas opciones: 1. Información sobre Historietas\n2. Consulta de Wikis\n3. Ver artículos sobre tecnología' });

      } else if (message.includes('adios') || message.includes('chau') || message.includes('nos vemos')) {
        const despedida = this.getRandomResponse(this.despedidas);
        this.messages.push({ sender: 'bot', text: despedida });

      } else if (message.includes('1')) {
        this.messages.push({ sender: 'bot', text: '¡Genial! Aquí tienes información sobre historietas: [enlace a historietas]. ¿Algo más? 📚' });
      } else if (message.includes('2')) {
        this.messages.push({ sender: 'bot', text: 'Aquí puedes consultar las wikis más populares: [enlace a wikis]. ¿Te interesa algo más? 📖' });
      } else if (message.includes('3')) {
        this.messages.push({ sender: 'bot', text: 'Aquí tienes algunos artículos interesantes sobre tecnología: [enlace a artículos]. ¿Necesitas más información? 💻' });

      } else {
        const respuestaGeneral = this.getRandomResponse(this.respuestasGenerales);
        this.messages.push({ sender: 'bot', text: respuestaGeneral });
      }

      this.userInput = '';
    }
  }

  private getRandomResponse(responses: string[]): string {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  }
}



