// backend/api.php
<?php
include_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Retrieve data
        $result = $conn->query("SELECT * FROM items");
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        echo json_encode($data);
        break;

    case 'POST':
        // Add new item
        $input = json_decode(file_get_contents('php://input'), true);
        $name = $input['name'];
        $quantity = $input['quantity'];
        $conn->query("INSERT INTO items (name, quantity) VALUES ('$name', $quantity)");
        break;

    case 'PUT':
        // Update item
        $input = json_decode(file_get_contents('php://input'), true);
        $id = $input['id'];
        $name = $input['name'];
        $quantity = $input['quantity'];
        $conn->query("UPDATE items SET name='$name', quantity=$quantity WHERE id=$id");
        break;

    case 'DELETE':
        // Delete item
        $id = $_GET['id'];
        $conn->query("DELETE FROM items WHERE id=$id");
        break;

    default:
        http_response_code(405);
        echo json_encode(array("message" => "Method not allowed."));
        break;
}

$conn->close();
?>
