package ifc33b.dwesc.agenda_contactes.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ContacteRequest {
    // Atributos
    @NotBlank(message = "Se requiere un nombre para el contacto")
    private String nom;

    @NotNull
    private int telefon;

    @NotBlank(message = "Se requiere un email para el contacto")
    private String email;

    // Constructor
    public ContacteRequest(String nom, int telefon, String email) {
        this.setNom(nom);
        this.setTelefon(telefon);
        this.setEmail(email);
    }
}
