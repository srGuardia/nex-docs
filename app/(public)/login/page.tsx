import { Button } from '@/components/ui/button'
import { HeartIcon } from 'lucide-react'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <section className='flex h-full w-full'>
      <div className='relative h-full w-1/2'>
        <Image
          width={0}
          height={0}
          src='/images/login.jpg'
          alt='Login'
          priority
          unoptimized
          className='h-full w-full object-cover opacity-30'
        />
        <span className='absolute bottom-2 left-0 select-none text-xs font-medium italic outline-none'>
          Foto de&nbsp;
          <a
            href='https://unsplash.com/pt-br/@stoman?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
            target='_blank'
            className='underline'
          >
            Nangialai Stoman
          </a>
          &nbsp; na&nbsp;
          <a
            href='https://unsplash.com/pt-br/fotografias/uma-pilha-de-livros-sentados-na-frente-de-um-computador-1Lt1ny9nGWY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
            className='inline-flex items-center gap-2 underline'
          >
            Unsplash
            <HeartIcon
              color='red'
              className='animate-infinite animate-pulse'
              size={16}
            />
          </a>
        </span>
      </div>

      <div className='relative h-full w-full flex-1 content-center text-center'>
        <h2 className='text-2xl font-bold md:text-5xl'>Bem vindo</h2>
        <p className='md:text-md mt-2 text-sm'>
          Entre com sua conta do Google ou GitHub para continuar
        </p>

        <div className='flex flex-col items-center justify-center'>
          <Button className='mt-4' variant='default'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='lucide lucide-github'
            >
              <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
              <path d='M9 18c-4.51 2-5-2-7-2' />
            </svg>
            GitHub
          </Button>

          <Button
            className='animate-once mt-4 aria-pressed:animate-pulse'
            variant='outline'
          >
            G Google
          </Button>
        </div>
      </div>
    </section>
  )
}
