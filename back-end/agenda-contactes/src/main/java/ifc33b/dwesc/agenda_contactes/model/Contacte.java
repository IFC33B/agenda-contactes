package ifc33b.dwesc.agenda_contactes.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
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
    @Column(nullable = false)
    private int telefon;

    @NotBlank(message = "Se requiere un email para el contacto")
    @Column(nullable = false)
    private String email;

    // Constructor
    public Contacte() {}

    public Contacte(String nom, int telefon, String email) {
        this.setNom(nom);
        this.setTelefon(telefon);
        this.setEmail(email);
    }
}
