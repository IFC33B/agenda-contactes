package daw.dwes.agenda_contactes.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ContacteRequest {

    @NotBlank (message = "El nombre no puede estar en blanco")
    private String nom;

    @NotNull (message = "El teléfono no puede estar en blanco")
    private int telefon;
    
    @NotBlank (message = "El e-mail no puede estar en blanco")
    @Email (message = "Solo se pueden introducir e-mails válidos en este campo")
    private String email;

    public ContacteRequest (String nom, int telefon, String email) {
        this.setNom(nom);
        this.setTelefon(telefon);
        this.setEmail(email);
    }
}
