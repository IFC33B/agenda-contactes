package ifc33b.dwesc.agenda_contactes.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Entity
@Data
@Table(name = "contacte")
public class Contacte {
    // Atributos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Se requiere un nombre para el contacto")
    @Column(nullable = false)
    private String nom;

    @NotBlank(message = "Se requiere un teléfono para el contacto")
    @Pattern(regexp = "\\d{9}", message = "El teléfono debe tener 9 dígitos")
    @Column(nullable = false)
    private String telefon;

    @NotBlank(message = "Se requiere un email para el contacto")
    @Email(message = "El email debe tener un formato válido")
    @Column(nullable = false)
    private String email;

    // Constructor
    public Contacte() {}

    public Contacte(String nom, String telefon, String email) {
        this.setNom(nom);
        this.setTelefon(telefon);
        this.setEmail(email);
    }
}
