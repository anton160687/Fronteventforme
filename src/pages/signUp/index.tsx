import Container from 'react-bootstrap/Container';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import ImageLoader from '../../components/_finder/ImageLoader';
import SocialMedia from '@/components/sign/socialMedia/socialMedia';

export default function RegWelcome(): JSX.Element {
  // Router
  const router = useRouter();

  return (
    <Container as="section" className="mx-auto w-75">
      <>
        {/* Custom page title attribute */}
        <Head>
          <title>Finder | Sing In Page</title>
        </Head>

        {/* Page wrapper */}
        <main className="page-wrapper">
          <div className="container-fluid d-flex h-100 align-items-center justify-content-center py-4 py-sm-5">
            {/* Sign in card */}
            <div className="card card-body" style={{ maxWidth: '940px' }}>
              <div
                className="position-absolute top-0 end-0 nav-link fs-sm py-1 px-2 mt-3 me-3"
                onClick={() => router.back()}
              >
                <i className="fi-arrow-long-left fs-base me-2"></i>
                Go back
              </div>
              <div className="row mx-0 align-items-center">
                <div className="col-md-6 border-end-md p-2 p-sm-5">
                  <h2 className="h3 mb-4 mb-sm-5">
                    Присоединяйтесь к EventForMe. Получите доступ к услугам:
                  </h2>
                  <div className="d-flex justify-content-center">
                    <ImageLoader
                      src="/img/signup.svg"
                      width={344}
                      height={404}
                      alt="Illusration"
                    />
                  </div>
                  <div className="mt-4 mt-sm-5">
                    Уже есть аккаунт?{'\u00A0'}
                    <Link href="/signup-light">Войти</Link>
                  </div>
                </div>
                <SocialMedia />
              </div>
            </div>
          </div>
        </main>
      </>
    </Container>
  );
}
