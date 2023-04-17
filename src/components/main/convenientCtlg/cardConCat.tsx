import Link from "next/link"
import { FC } from "react";
import styles from "./convenientCatalog.module.scss";

type cardType = {
  title: string,
  description: string,
  nameImg: string,
  color: string
}
export const CardConCat:FC<cardType>  = ({title, description, nameImg, color}) =>  (
  <Link href="#" className={`${styles.icon} icon-box card card-body border-0 shadow col-xl-6 g-4`}>
    <div className={`${styles.icon_img} shadow`}>
      <i className={` ${nameImg} shadow`}></i>
    </div>
    <h3 className="icon-box-title fs-base mt-5 mb-2">{title}</h3>
    <p className="text-dark">{description}</p>
  </Link>
  )
