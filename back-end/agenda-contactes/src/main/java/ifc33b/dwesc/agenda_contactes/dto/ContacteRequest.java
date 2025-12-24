package ifc33b.dwesc.agenda_contactes.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class ContacteRequest {
    // Atributos
    @NotBlank(message = "Se requiere un nombre para el contacto")
    private String nom;

    @NotBlank(message = "Se requiere un teléfono para el contacto")
    @Pattern(regexp = "\\d{9}", message = "El teléfono debe tener 9 dígitos")
    private String telefon;

    @NotBlank(message = "Se requiere un email para el contacto")
    @Email(message = "El email debe tener un formato válido")
    private String email;

    // Constructor
    public ContacteRequest(String nom, String telefon, String email) {
        this.setNom(nom);
        this.setTelefon(telefon);
        this.setEmail(email);
    }
}
