import React, { useContext, useEffect } from "react";
import styles from "./AddProduit.module.scss";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ApiContext from "../../../contexts/apiContext";

const AddProduit = () => {
  const { BASE_URL } = useContext(ApiContext);
  const defaultValues = {
    name: "",
    note: "",
    image: "",
  };
  const monSchemaYUP = yup.object({
    name: yup
      .string()
      .required("Le nom est requis !")
      .min(2, "Le nom est trop court !"),
    note: yup
      .string()
      .required("Les notes sont requises !")
      .min(5, "Les notres sont trop courtes !"),
    image: yup.mixed().when("name", {
      is: (value) => value?.length,
      then: (schema) =>
        schema
          .test("name", "L'image est requise !", (value) => {
            return value != undefined && value[0] && value[0].name !== "";
          })
          .test("type", "Seules les images sont accéptées !", (value) => {
            return (
              value != undefined && value[0] && value[0].type.includes("image")
            );
          }),
    }),
  });

  const {
    handleSubmit,
    register,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(monSchemaYUP),
  });

  const monSubmit = async (values) => {
    const formData = new FormData();
    formData.append("file", {
      preview: URL.createObjectURL(values.image[0]),
      data: values.image[0],
    });
    console.log({ ...values, image: values.image[0] });
    try {
      const response = await fetch(`${BASE_URL}/produits`, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: JSON.stringify({ ...values, image: formData }),
      });

      if (response.ok) {
        reset(defaultValues);
      } else {
        setError("generic", {
          type: "generic",
          message: "Il y a eu une erreur !",
        });
      }
    } catch (error) {
      setError("generic", {
        type: "generic",
        message: "Il y a eu une erreur !",
      });
    }
  };

  return (
    <div className={styles.addProduit}>
      <h2 className="my-10 text-center">Ajouter un produit</h2>
      <form action="" onSubmit={handleSubmit(monSubmit)}>
        <div className="my-10">
          <label htmlFor="name">Le nom du produit :</label>
          <input type="text" {...register("name")} id="name" />
          {errors?.name && <p className="error">{errors.name.message}</p>}
        </div>
        <div className="my-10">
          <label htmlFor="note">Les notes du produit :</label>
          <input type="text" {...register("note")} id="note" />
          {errors?.note && <p className="error">{errors.note.message}</p>}
        </div>
        <div className="my-10">
          <label htmlFor="image">Le nom du produit :</label>
          <input type="file" {...register("image")} id="image" />
          {errors?.image && <p className="error">{errors.image.message}</p>}
        </div>
        <div className="my-10">
          <button>Ajouter</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduit;
