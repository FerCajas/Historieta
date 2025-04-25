import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements AfterViewChecked {
  userInput: string = '';
  messages: { sender: string, text: string, animatedText: string }[] = [];

  @ViewChild('chatWindow') private chatWindow!: ElementRef;

  private userName: string = '';
  private userDespedido: boolean = false;
  private botName: string = 'Asseff IA 🤖';

  private saludos = [
    '¡Hola! ¿Cómo estás hoy? 😊',
    '¡Hey! Qué bueno verte por aquí 😄',
    '¡Hola, humano curioso! 🤖',
    '¡Bienvenido/a! ¿Listo/a para charlar? 💬',
    '¡Qué alegría tenerte de vuelta! 🙌'
  ];

  private despedidas = [
    '¡Adiós! Si necesitas más ayuda, estaré aquí. 👋',
    '¡Nos vemos pronto! No dudes en volver cuando quieras. 😄',
    '¡Cuídate! Si necesitas algo, aquí estaré. 😊',
    '¡Hasta luego! ¡Espero que tengas un gran día! 🌟',
    '¡Chau! No dudes en regresar cuando necesites ayuda. 😎'
  ];

  private chistes = [
    '¿Por qué el libro de matemáticas se deprimió? Porque tenía demasiados problemas. 😂',
    '¿Qué le dice un techo a otro? Techo de menos. 😆',
    '¿Por qué el computador fue al médico? Porque tenía un virus. 🤒',
    '¿Cuál es el café más peligroso del mundo? El ex-preso. ☕😄'
  ];

  private respuestasMusica = [
    '¡La música lo cura todo! 🎶 ¿Qué género te gusta?',
    'Podés escuchar esta playlist genial: <a href="https://open.spotify.com/" target="_blank">Spotify 🎧</a>',
    '¿Querés recomendaciones de rock, pop, lo-fi o algo tranquilo? 🎸'
  ];

  private respuestasGenerales = [
    'Lo siento, no te entiendo. Por favor, elige una opción o pregunta algo específico. 🤔',
    'No estoy seguro de lo que me estás pidiendo, ¿puedes intentar otra vez? 😕',
    '¿Podrías ser más específico con tu solicitud? 😅',
    'Lo siento, pero no puedo ayudarte con eso. ¿Te gustaría saber algo más sobre los temas disponibles? 🤖'
  ];

  sendMessage() {
    if (this.userInput.trim()) {
      const message = this.userInput.toLowerCase();
      this.messages.push({ sender: 'user', text: this.userInput, animatedText: this.userInput });


      const nombreMatch = message.match(/(?:me llamo|soy)\s+([a-záéíóúñ]+)/i);
      if (nombreMatch) {
        this.userName = this.capitalize(nombreMatch[1]);
        this.animateBotResponse(`¡Mucho gusto, ${this.userName}! 😊 ¿En qué puedo ayudarte hoy?`);
        this.userInput = '';
        return;
      }


      if (message.includes('cómo te llamas') || message.includes('tu nombre')) {
        this.animateBotResponse(`Me llamo ${this.botName}, y estoy aquí para ayudarte. 🤖`);
        this.userInput = '';
        return;
      }


      if (message.includes('adios') || message.includes('chau') || message.includes('nos vemos')) {
        this.userDespedido = true;
        const despedida = this.getRandomResponse(this.despedidas);
        this.animateBotResponse(despedida);
        this.userInput = '';
        return;
      }


      if (message.includes('hola') || message.includes('hey') || message.includes('buenas')) {
        const saludo = this.userDespedido
          ? this.userName ? `¡Volviste, ${this.userName}! 😊` : '¡Volviste de nuevo! 😊'
          : this.getRandomResponse(this.saludos);

        this.userDespedido = false;

        this.animateBotResponse(`${saludo}<br>Aquí tienes algunas opciones:<br>1. Información sobre Historietas<br>2. Consulta de Wikis<br>3. Ver artículos sobre tecnología`);
        this.userInput = '';
        return;
      }


      if (message.includes('hora')) {
        this.animateBotResponse(this.getHora());
        this.userInput = '';
        return;
      }


      if (message.includes('chiste') || message.includes('ríe') || message.includes('cuenta algo divertido')) {
        const chiste = this.getRandomResponse(this.chistes);
        this.animateBotResponse(chiste);
        this.userInput = '';
        return;
      }


      if (message.includes('música') || message.includes('canción') || message.includes('spotify')) {
        const respuesta = this.getRandomResponse(this.respuestasMusica);
        this.animateBotResponse(respuesta);
        this.userInput = '';
        return;
      }


      if (message.includes('gracias') || message.includes('ok')) {
        this.animateBotResponse('¡De nada! Estoy aquí para ayudarte 😊');
        this.userInput = '';
        return;
      }


      if (message.includes('1')) {
        this.animateBotResponse('¡Genial! Aquí tienes información sobre historietas: <a href="https://enlace-a-historietas.com" target="_blank">Enlace a historietas</a>. ¿Algo más? 📚');
        this.userInput = '';
        return;
      }


      if (message.includes('2')) {
        this.animateBotResponse('Aquí puedes consultar las wikis más populares: <a href="https://enlace-a-wikis.com" target="_blank">Enlace a wikis</a>. ¿Te interesa algo más? 📖');
        this.userInput = '';
        return;
      }


      if (message.includes('3')) {
        this.animateBotResponse('Aquí tienes algunos artículos interesantes sobre tecnología: <a href="https://enlace-a-articulos.com" target="_blank">Enlace a artículos</a>. ¿Necesitas más información? 💻');
        this.userInput = '';
        return;
      }


      const respuestaGeneral = this.getRandomResponse(this.respuestasGenerales);
      this.animateBotResponse(respuestaGeneral);
      this.userInput = '';
    }
  }

  private getRandomResponse(responses: string[]): string {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  }

  private getHora(): string {
    const ahora = new Date();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    return `Son las ${hora}:${minutos} ⏰`;
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private animateBotResponse(response: string) {
    const message = { sender: 'bot', text: response, animatedText: response };
    this.messages.push(message);
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    if (this.chatWindow) {
      try {
        this.chatWindow.nativeElement.scrollTop = this.chatWindow.nativeElement.scrollHeight;
      } catch (err) {
        console.error('No se pudo hacer scroll automático', err);
      }
    }
  }
}





