import { http, HttpResponse } from 'msw';
import { setupWorker } from 'msw/browser';

// Define la estructura del cuerpo de la solicitud
interface UserRequestBody {
  userId: number;
  userName: string;
}

// Lista de usuarios simulados
const users = [
  { userId: 1, userName: 'Bruno' },
  { userId: 2, userName: 'Agus G' },
  { userId: 3, userName: 'Agus M' }
];

export const handlers = [
  http.post('/api/users', async ({ request }) => {
    // Lee el cuerpo de la solicitud y usa una aserción de tipo
    const body = await request.json() as UserRequestBody;

    const userId = Number(body.userId);
    const userName = body.userName;

    // Busca si el usuario existe en el arreglo
    const foundUser = users.find(user => user.userId === userId && user.userName === userName);

    if (foundUser) {
      // Si se encuentra el usuario, responde con sus datos
      return HttpResponse.json({
        id: foundUser.userId,
        name: foundUser.userName,
        status: 'User found',
      });
    } else {
      // Si no se encuentra, responde con un 404
      return HttpResponse.json({
        message: 'User not found',
      }, { status: 404 });
    }
  }),
];

// Inicia el worker dentro de una función
const worker = setupWorker(...handlers);
/*
async function startWorker() {
  await worker.start();
}

// Llama a la función para iniciar el worker, pero no a nivel superior
startWorker();*/

export { worker };
