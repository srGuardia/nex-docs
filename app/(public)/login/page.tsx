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
          loading='lazy'
          unoptimized
          className='h-full w-full object-cover opacity-30'
        />
        <span className='absolute bottom-2 left-0 text-sm font-bold italic'>
          Foto de&nbsp;
          <a
            href='https://unsplash.com/pt-br/@stoman?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
            target='_blank'
            className='text-purple-500 underline'
          >
            Nangialai Stoman
          </a>
          &nbsp; na&nbsp;
          <a href='https://unsplash.com/pt-br/fotografias/uma-pilha-de-livros-sentados-na-frente-de-um-computador-1Lt1ny9nGWY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>
            Unsplash
          </a>
        </span>
      </div>
      <div>
        <h1 className='text-4xl font-bold'>Login</h1>
      </div>
    </section>
  )
}
