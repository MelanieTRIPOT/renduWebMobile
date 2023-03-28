import React, { useRef } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../App";
import { useNavigate } from "react-router-dom";
import { getDocs, query, collection, where } from "firebase/firestore";
import { db } from "../App";

function Pwa() {
  return (
    <div className="App">
      <h1>PWA</h1>
      <p>
        bonnjour, l'application que vous utlisez est une{" "}
        <a href="https://www.mobizel.com/pwa-quest-ce-que-cest/">PWA</a>, Vous
        pouvez la telecharger et une version telecharger vous approtera les
        avantages suivant:
      </p>
      <ul>
        <li>
          créer un raccourci du site ou de l'application directement sur l'écran
          d'accueil du visiteur
        </li>
        <li>
          recevoir des notifications push (par exemple, à chaque nouvel article,
          à chaque nouveauté sur le site, comme pour une application)
        </li>
        <li>
          accéder aux fonctionnalités du téléphone telles que l’appareil photo,
          la géolocalisation, le micro, la boussole…
        </li>
        <li>
          atteindre les contenus hors-connexion grâce à un mode hors-ligne
        </li>
        <li>
          expérience utilisateur optimisée pour les appareils mobiles, avec des
          temps de chargement plus rapides et une utilisation hors ligne.
        </li>
      </ul>
      <button>
        <a href="https://support.google.com/chrome/answer/9658361?hl=fr&co=GENIE.Platform%3DDesktop">
          Comment telercharger
        </a>
      </button>
    </div>
  );
}

export default Pwa;
